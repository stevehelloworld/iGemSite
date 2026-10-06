from os import environ, path

import markdown
from flask import Flask, abort, render_template
from flask_frozen import Freezer

template_folder = path.abspath('./wiki')

app = Flask(__name__, template_folder=template_folder)
# app.config['FREEZER_BASE_URL'] = environ.get('CI_PAGES_URL')
app.config['FREEZER_DESTINATION'] = 'public'
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_IGNORE_MIMETYPE_WARNINGS'] = True
app.config['PUBLIC_SITE_ROOT'] = environ.get('CI_PAGES_URL', '').rstrip('/') + '/'
freezer = Freezer(app)

# Markdown extensions enabled when converting docs/*.md to HTML.
# "extra" bundles tables, fenced code blocks, footnotes, attribute lists, etc.
# See https://python-markdown.github.io/extensions/
MARKDOWN_EXTENSIONS = ['extra', 'sane_lists', 'smarty', 'toc']


def render_markdown(page):
    """Read docs/<page>.md and convert it to an HTML fragment."""
    with open(f'docs/{page}.md', encoding='utf-8') as md_file:
        return markdown.markdown(md_file.read(), extensions=MARKDOWN_EXTENSIONS)


@freezer.register_generator
def unlinked_pages():
    """Keep freezing pages that are no longer linked from the navbar."""
    for page in ['background', 'problem-statement', 'alternative-platform',
                 'industry', 'software']:
        yield 'pages', {'page': page}


@app.cli.command()
def freeze():
    freezer.freeze()


@app.cli.command()
def serve():
    freezer.run()


@app.route('/')
def home():
    md_content = render_markdown('home')
    return render_template('base.html',
                           title='Home',
                           md_content=md_content)


@app.route('/<page>')
def pages(page):
    if not path.isfile(path.join('docs', f'{page.lower()}.md')):
        abort(404)
    md_content = render_markdown(page.lower())
    return render_template('base.html',
                           title=page.title().replace('-', ' '),
                           md_content=md_content)


@app.route('/404.html')
def not_found_page():
    return render_template('base.html', title='Page not found',
                           is_not_found=True,
                           md_content=render_template('not-found.html'))


@app.errorhandler(404)
def not_found(error):
    return not_found_page(), 404


# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=8080)
