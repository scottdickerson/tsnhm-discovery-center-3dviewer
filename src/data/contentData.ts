export interface ContentData {
    detailId: string
    title: string
    location: string
    detailTitle: string
    detailDescription: string
    media: string
    credit: string
    funFact: string
    silhouetteSrc: string
    silhouetteWidth?: number
    funFactSrc?: string
    modelFileName: string
    modelScale?: number
    lightIntensity: number
    modelType?: 'gltf' | 'obj' | 'video'
    position?: [number, number, number]
}

export const contentData: Record<
    'sauropod' | 'theropod' | 'footprint3' | 'gskull' | 'lepidus' | 'poposaur',
    ContentData
> = {
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
        silhouetteSrc: '/silhouettes/tracks_and_traces/sauropod.svg',
        funFactSrc:
            '/funFactImages/tracks_and_traces/Tracks and Traces Fun Fact 1.webp',
        modelFileName:
            '/models/Tracks_and_Traces/birdSite_Sauro/largeSauro_track3',
        modelScale: 0.55,
        lightIntensity: 1,
        modelType: 'gltf',
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
        silhouetteSrc: '/silhouettes/tracks_and_traces/theropod.svg',
        funFactSrc:
            '/funFactImages/tracks_and_traces/Tracks and Traces Fun Fact 2.webp',
        modelFileName: '/models/Tracks_and_Traces/Baker_acro/acroTrack2',
        modelScale: 1,
        lightIntensity: 1,
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
        silhouetteSrc: '/silhouettes/tracks_and_traces/footprint3.svg',
        funFactSrc:
            '/funFactImages/tracks_and_traces/Tracks and Traces Fun Fact 3.webp',
        modelFileName: '/models/Tracks_and_Traces/BlueHole/blueHoleTrack',
        modelScale: 0.8,
        lightIntensity: 1,
    },
    gskull: {
        detailId: 'skull',
        title: 'Skull',
        location: 'Gustafsonia cognita',
        detailTitle: 'One of a Kind',
        detailDescription:
            "This skull from a Chihuahua-sized mammal is the only known fossil from this species. It was discovered by Jack Wilson and his UT Austin field crew in 1966. It is part of the University's research collection.",
        media: 'Computed Tomography Scan, 2021',
        credit: 'Courtesy Therese Flink and Richard Ketcham',
        funFact:
            '<p>Gustfsonia is part of a larger group of extinct animals that are sometimes called "bear-dogs."</p> <p>This animal lived between 36.6 and 38.1 million years ago in what is now West Texas. </p>',
        silhouetteSrc: '/silhouettes/body_fossils/Gustafsonia-cognita.svg',
        silhouetteWidth: 150,
        lightIntensity: 0.1,
        modelScale: 0.45,
        modelFileName: '/models/Body_Fossils/Gskull_wRuler/Gskull_wRuler',
    },
    lepidus: {
        detailId: 'lepidus',
        title: 'Tibiotarsus',
        location: 'Lepidus praecisio',
        detailTitle: 'Dino-Identity',
        detailDescription:
            'This dinosaur ankle joint is around 220 million years old--making it one of the oldest dinosaur fossils found in North America. Dinosaur ankles operate on a single hinge, an adaptation that allowed them to walk on two legs. ',
        media: 'Laser Scan, 2024',
        credit: 'Courtesy Adam Marsh and Chris Sagebiel',
        funFact:
            '<p>This early dinosaur lived in what would become North Texas during the Triassic period.</p><p>Only a few fragments of Lepidus praecisio have been found. </p><p>Luckily, the "fascinating fragments" include an ankle joint that distinguishes Lepidus from its reptile relatives. </p> ',
        funFactSrc: '/funFactImages/body_fossils/lepidus_praecisio.webp',
        silhouetteSrc: '/silhouettes/body_fossils/Lepidus praecisio.svg',
        lightIntensity: 0.05,
        modelFileName: '/models/Body_Fossils/Lepidus_noRuler/Lepidus_noRuler',
        modelScale: 0.03,
    },
    poposaur: {
        detailId: 'poposaur',
        title: 'Vertebra',
        location: 'Poposaurus langstoni',
        detailTitle: 'Triassic Two Step',
        detailDescription:
            "Poposaurus walked across Texas on two legs, but it's not a dinosaur. It's from a group of archosaurs that are more closely related to modern crocodiles.  ",
        media: 'Laser Scan, 2024',
        credit: 'Courtesy Adam Marsh and Chris Sagebiel',
        funFact:
            "<p>This Poposaurus fossil was found near Big Spring, Texas and is part of UT Austin's collection.</p><p>A nearly complete skeleton was later found in Utah and is displayed in the Yale Museum.</p>",
        funFactSrc: '/funFactImages/body_fossils/PoposaurusYale.webp',
        silhouetteSrc: '/silhouettes/body_fossils/Poposaurus_gracilis.svg',
        lightIntensity: 0.025,
        modelFileName: '/models/Body_Fossils/poposaur_noRuler/poposaur_noRuler',
        modelScale: 0.0125,
    },
} as const
