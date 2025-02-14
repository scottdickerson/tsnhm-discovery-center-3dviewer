export const contentData = {
    sauropod: {
        detailId: 'sauropod',
        title: 'Sauropod Footprint',
        location: 'Dinosaur Valley State Park',
        detailTitle: 'Earth-shaking Sauropod',
        detailDescription:
            'Due to its enormous size, scientists think that a Sauroposeidon made this track. Named for the Greek God of oceans and earthquakes, this long-necked dinosaur may have made the ground shake with each step!',
        media: '3D Photogrammetry, 2023',
        credit: 'Courtesy Paul Baker',
        funFact:
            '<p>During the summer of 2022, a drought dried the Puluxy River in Glen Rose, Texas briefly revealing many never-before-seen dinosaur footprints.</p><p>A team of volunteers from Dallas Paleontological Society volunteers, Glen Kuban, and Paul Baker rushed to clean, record, and measure the tracks before the drought ended.</p>',
        silhouetteSrc: '/silhouettes/sauropod.svg',
        src: '/footprints/sauropod.png',
        funFactSrc: '/funFactImages/Tracks and Traces Fun Fact 1 Medium.jpeg',
        modelFileName:
            '/models/Tracks_and_Traces/birdSite_Sauro/largeSauro_track3',
        modelScale: 0.65,
        // modelScale: 0.45,
        // modelFileName: '/models/Body_Fossils/Gskull_wRuler/Gskull_wRuler',
    },
    theropod: {
        detailId: 'theropod',
        title: 'Theropod Footprint',
        location: 'Dinosaur Valley State Park',
        detailTitle: 'Claws!',
        detailDescription:
            'This Acrocanthosaurus print perfectly preserves the impression of this predatorʼs toes and sharp claws. ',
        media: '3D Photogrammetry, 2023',
        credit: 'Courtesy Paul Baker',
        funFact:
            '<p>Flooding and fast moving waters can destroy fossil footprints.</p> <p>Digital scanning preserves information about these prints for the future.</p>',
        silhouetteSrc: '/silhouettes/theropod.svg',
        src: '/footprints/theropod.png',
        funFactSrc: '/funFactImages/Tracks and Traces Fun Fact 2 Medium.jpeg',
        modelFileName: '/models/Tracks_and_Traces/Baker_acro/acroTrack2',
        modelScale: 1.2,
        // modelFileName: '/models/Body_Fossils/Lepidus_noRuler/Lepidus_noRuler',
        // modelScale: 0.03,
    },
    footprint3: {
        detailId: 'footprint3',
        title: 'Theropod Footprint',
        location: 'Dinosaur Valley State Park',
        detailTitle: 'Predator Prints',
        detailDescription:
            'Researchers think that a large Acrocanthosaurus made this track. This three-toed, meat-eating dinosaur ran after its prey on its two powerful hind legs.  ',
        media: '3D Photogrammetry, 2023',
        credit: 'Courtesy Paul Baker',
        funFact:
            '<p>This is one of the largest theropod prints ever documented at Dinosaur Valley State Park.</p><p>It is usually underwater, but was briefly visible during a drought. </p> ',
        src: '/footprints/footprint3.png',
        silhouetteSrc: '/silhouettes/footprint3.svg',
        funFactSrc: '/funFactImages/Tracks and Traces Fun Fact 3 Medium.jpeg',
        modelFileName: '/models/Tracks_and_Traces/BlueHole/blueHoleTrack',
        modelScale: 1,
        // modelFileName: '/models/Body_Fossils/poposaur_noRuler/poposaur_noRuler',
        // modelScale: 0.0125,
    },
} as const
