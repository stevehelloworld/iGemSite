<script>
(() => {
    const head = document.head || document.getElementsByTagName("head")[0];

    if (head && !document.querySelector('link[href*="/static/team.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/static/team.css?v=20260806-team1";
        head.appendChild(link);
    }

    if (!document.querySelector('script[src*="/static/js/team.js"]')) {
        const script = document.createElement("script");
        script.src = "/static/js/team.js?v=20260806-team1";
        script.defer = true;
        document.body.appendChild(script);
    }
})();
</script>

<section class="team-hero">

    <div class="space-background">

        <!-- Stars -->
        <div class="stars"></div>

        <!-- Nebula -->
        <div class="nebula nebula-1"></div>
        <div class="nebula nebula-2"></div>

        <!-- Title -->
        <div class="hero-title">

            <h1>OUR TEAM</h1>

            <p>
                Explore Our Solar System
            </p>

        </div>

        <!-- Solar System -->
        <div class="solar-system">

            <!-- Orbit -->
	        <!-- Mercury -->
		<div class="orbit mercury-orbit">
		    <button
		        class="planet mercury"
		        data-member="mercury"
            data-label="Sunny">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/mercury.avif"
		                alt="Mercury">	
		        </div>
		    </button>
		</div>

		<!-- Venus -->
		<div class="orbit venus-orbit">
		    <button
		        class="planet venus"
		        data-member="venus"
            data-label="Chelsea">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/venus.avif"
		                alt="Venus">
		        </div>
		    </button>
		</div>

		<!-- Earth -->
		<div class="orbit earth-orbit">
		    <button
		        class="planet earth"
		        data-member="earth"
            data-label="Francis">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/earth.avif"
		                alt="Earth">
		        </div>
		    </button>
		</div>


	        <!-- Mars -->
		<div class="orbit mars-orbit">
		    <button
		        class="planet mars"
		        data-member="mars"
            data-label="Ray">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/mars.avif"
		                alt="Mars">
		        </div>
		    </button>
		</div>

		<!-- Jupiter -->
		<div class="orbit jupiter-orbit">
		    <button
		        class="planet jupiter"
		        data-member="jupiter"
            data-label="Lucy">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/jupiter.avif"
		                alt="Jupiter">
		        </div>
		    </button>
		</div>


	        <!-- Saturn -->
		<div class="orbit saturn-orbit">
		    <button
		        class="planet saturn"
		        data-member="saturn"
            data-label="Ian">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/saturn2.avif"
		                alt="Saturn">
		        </div>
		    </button>
		</div>

		<!-- Uranus -->
		<div class="orbit uranus-orbit">
		    <button
		        class="planet uranus"
		        data-member="uranus"
            data-label="Eugenia">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/uranus.avif"
		                alt="Uranus">
		        </div>
		    </button>
		</div>

		<!-- Neptune -->
		<div class="orbit neptune-orbit">
		    <button
		        class="planet neptune"
		        data-member="neptune"
            data-label="Nicholas">
		        <div class="planet-inner">
		            <img
		                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/neptune.avif"
		                alt="Neptune">
		        </div>
		    </button>
		</div>            <!-- Sun -->
	   <button class="planet sun" data-member="sun" data-label="Ohanna">
		    <div class="planet-inner">
	        <img src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/planets/sun.avif">
	    </div>
	</button>               


        </div>

    </div>

</section>


<section class="member-section">

    <div class="member-card">

        <div class="member-photo">

            <img
                id="member-image"
                src="https://static.igem.wiki/teams/6423/wiki/static/assests/images/members/team-photo.avif"
                alt="Member">

        </div>

        <div class="member-content">

            <h2 id="member-name">
                VIS iGEM Team
            </h2>

            <h3 id="member-role">
                Click a planet to explore our team.
            </h3>

            <p id="member-intro">

                Welcome to our solar system.

                Each planet represents one member of our team.

                Select a planet above to learn more about them.

            </p>

            <div id="member-skills"
                class="member-skills">

            </div>

        </div>

    </div>

</section>


