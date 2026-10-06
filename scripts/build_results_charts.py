"""Render the published pVIS chart values without reinterpreting the source data."""
from pathlib import Path
import json
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'static/assets/charts'
OUT.mkdir(parents=True, exist_ok=True)
DOSES = [0, 8, 40, 200, 300, 400]
GFP = {
 'pMH45':[407,434,779,12088,19157,19052],
 'pVIS1':[217,231,357,2601,5016,6862],
 'pVIS2':[143,137,202,647,917,1201],
 'pVIS3':[156,165,301,2066,2484,2718],
 'pVIS4':[384,400,620,3610,6271,8083],
 'pVIS5':[40,17,28,470,1107,1198],
 'pVIS6':[44,1,27,368,763,1071],
 'pVIS7':[44,45,68,345,67,122],
 'pVIS8':[105,99,87,493,800,747],
}
GROWTH = {
 'pVIS1':[.907,.943,1.073,1.036,1.135,1.111],
 'pVIS2':[.921,.929,1.106,1.057,1.024,1.156],
 'pVIS3':[.945,.979,.848,.672,.793,.826],
 'pVIS4':[.888,.908,.991,.926,1.050,1.135],
 'pVIS5':[1.032,1.033,.890,1.002,1.025,1.252],
 'pVIS6':[1.052,1.030,.844,1.013,1.053,1.055],
 'pVIS7':[.955,.914,.813,.914,.237,.309],
 'pVIS8':[.921,.947,1.027,1.008,1.007,.989],
}
COLORS = {'pMH45':'#57646c','pVIS1':'#2b62b5','pVIS2':'#bc5b12','pVIS3':'#167956','pVIS4':'#648ac4','pVIS5':'#ba4b5c','pVIS6':'#52892d','pVIS7':'#7850a6','pVIS8':'#a93480'}
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':11,'svg.fonttype':'none','axes.labelcolor':'#285772','text.color':'#285772','xtick.color':'#285772','ytick.color':'#285772','axes.spines.top':False,'axes.spines.right':False})

def chart(data, name, log=False):
 fig,ax=plt.subplots(figsize=(11,6.4))
 fig.patch.set_facecolor('#f8fcfc');ax.set_facecolor('#f8fcfc')
 for label,values in data.items():
  plotted=[max(10,v) for v in values] if log else values
  suffix=f'{values[-1]:,}' if log else f'{values[-1]:.3f}'
  ax.plot(range(6),plotted,color=COLORS[label],label=f'{label} · {suffix}',marker='o',markersize=5,linewidth=2,linestyle='--' if label=='pMH45' else '-')
 ax.set_xticks(range(6),[str(v) for v in DOSES]);ax.set_xlim(-.15,5.15)
 ax.set_xlabel('Cd²⁺ added (nM), evenly spaced not to scale',labelpad=14)
 ax.grid(axis='y',color='#d8e7e9',linewidth=.8);ax.set_axisbelow(True)
 if log:
  ax.set_yscale('log');ax.set_ylim(10,35000);ax.set_yticks([10,100,1000,10000]);ax.yaxis.set_major_formatter(FuncFormatter(lambda v,pos:f'{v:,.0f}'))
  ax.axhspan(10,60,color='#c8e3e5',alpha=.5)
  ax.text(.05,35,'Background-subtraction noise floor',fontsize=9)
  ax.set_ylabel('Background-corrected GFP / OD₆₀₀')
  title='Every MT construct flattens the sensor’s cadmium response'
  subtitle='Standard medium · endpoint at 10.6 h · logarithmic y-axis'
 else:
  ax.set_ylim(0,1.35);ax.set_yticks([0,.25,.5,.75,1,1.25]);ax.axhline(1,color=COLORS['pMH45'],ls='--',lw=1.4)
  ax.set_ylabel('Growth rate / pMH45 on the same plate')
  title='MT protects growth at high cadmium — except pVIS3 and pVIS7'
  subtitle='Standard medium · dashed line = pMH45 · above 1.00 = faster than control'
 fig.text(.08,.955,title,fontsize=15,fontweight='bold')
 fig.text(.08,.91,subtitle,fontsize=10)
 ax.legend(loc='center left',bbox_to_anchor=(1.015,.5),frameon=False,title='Construct · at 400 nM',fontsize=10,title_fontsize=10)
 fig.subplots_adjust(left=.09,right=.77,top=.85,bottom=.14)
 fig.savefig(OUT/f'{name}.svg',metadata={'Date':None})
 plt.close(fig)

chart(GFP,'pvis-gfp-dose-response',True)
chart(GROWTH,'pvis-relative-growth')
for svg_path in OUT.glob('*.svg'):
    svg = svg_path.read_text()
    svg = svg.replace(
        'version="1.1">',
        'version="1.1">\n <style>text{font-family:Verdana,Geneva,sans-serif !important}</style>',
        1,
    )
    svg_path.write_text(svg)
(OUT/'pvis-chart-data.json').write_text(json.dumps({'cadmium_nM':DOSES,'gfp_od600':GFP,'growth_relative_to_pMH45':GROWTH,'provenance':'Values transcribed from the supplied report chart labels on 2026-10-06; not independently recalculated from raw workbooks.','display_note':'Concentrations are evenly spaced. GFP values below 10 are displayed at 10 to preserve the original chart convention.'},indent=2)+'\n')
