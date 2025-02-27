export interface ContentData {
    detailId: string
    buttonLine1: string
    buttonLine2?: string
    headerText: string
    leadText: string
    tombstoneLine1: string
    tombstoneLine2: string
    tombstoneLine3?: string
    tombstoneLine4: string
    funFact: string
    silhouetteSrc?: string
    silhouetteWidth?: number
    funFactSrc?: string
    modelFileName: string
    modelScale?: number
    lightIntensity?: number
    modelType?: 'gltf' | 'obj' | 'video'
    modelPosition?: [number, number, number]
    modelRotation?: [number, number, number]
}

export type ContentDataKeys =
    | 'sauropod'
    | 'theropod'
    | 'footprint3'
    | 'gskull'
    | 'lepidus'
    | 'poposaur'
    | 'skeleton'
    | 'body-model'
    | 'surface-details'

// @ts-ignore I know that at least on of these is true
export const contentData: Record<ContentDataKeys, ContentData> = {
    ...(import.meta.env.PUBLIC_INTERACTIVE === 'tracks_and_traces' ||
    !import.meta.env.PUBLIC_INTERACTIVE
        ? {
              sauropod: {
                  detailId: 'sauropod',
                  buttonLine1: 'Sauropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Earth-shaking Sauropod',
                  leadText:
                      'Due to its enormous size, scientists think that a Sauroposeidon made this track. Named for the Greek God of oceans and earthquakes, this long-necked dinosaur may have made the ground shake with each step!',
                  tombstoneLine1: 'Sauropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
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
                  buttonLine1: 'Theropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Claws!',
                  leadText:
                      'This Acrocanthosaurus print perfectly preserves the impression of this predatorʼs toes and sharp claws. ',
                  tombstoneLine1: 'Theropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
                  funFact:
                      '<p>Flooding and fast moving waters can destroy fossil footprints.</p> <p>Digital scanning preserves information about these prints for the future.</p>',
                  silhouetteSrc:
                      '/silhouettes/tracks_and_traces/Acrocanthsaur.svg',
                  funFactSrc:
                      '/funFactImages/tracks_and_traces/Tracks and Traces Fun Fact 2.webp',
                  modelFileName:
                      '/models/Tracks_and_Traces/BlueHole/blueHoleTrack5',
                  modelScale: 0.8,
                  modelPosition: [0, 0, 0],
                  lightIntensity: 1,
                  modelType: 'gltf',
              },
              footprint3: {
                  detailId: 'footprint3',
                  buttonLine1: 'Theropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Predator Prints',
                  leadText:
                      'Researchers think that a large Acrocanthosaurus made this track. This three-toed, meat-eating dinosaur ran after its prey on its two powerful hind legs.  ',
                  tombstoneLine1: 'Theropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
                  funFact:
                      '<p>This is one of the largest theropod prints ever documented at Dinosaur Valley State Park.</p><p>It is usually underwater, but was briefly visible during a drought. </p> ',
                  silhouetteSrc:
                      '/silhouettes/tracks_and_traces/Acrocanthsaur.svg',
                  funFactSrc:
                      '/funFactImages/tracks_and_traces/Tracks and Traces Fun Fact 3.webp',
                  modelFileName:
                      '/models/Tracks_and_Traces/Baker_acro/acroTrack3',
                  modelScale: 1.2,
                  lightIntensity: 1,
                  modelType: 'gltf',
              },
          }
        : {}),
    ...(import.meta.env.PUBLIC_INTERACTIVE === 'body_fossils' ||
    !import.meta.env.PUBLIC_INTERACTIVE
        ? {
              gskull: {
                  detailId: 'skull',
                  buttonLine1: 'Skull',
                  buttonLine2: 'Gustafsonia cognita',
                  headerText: 'One of a Kind',
                  leadText:
                      "This skull from a Chihuahua-sized mammal is the only known fossil from this species. It was discovered by Jack Wilson and his UT Austin field crew in 1966. It is part of the University's research collection.",
                  tombstoneLine1: 'Skull',
                  tombstoneLine2: 'Gustafsonia cognita',
                  tombstoneLine3: 'Computed Tomography Scan, 2021',
                  tombstoneLine4: 'Courtesy Therese Flink and Richard Ketcham',
                  funFact:
                      '<p>Gustafsonia is part of a larger group of extinct animals that are sometimes called "bear-dogs."</p> <p>This animal lived between 36.6 and 38.1 million years ago in what is now West Texas. </p>',
                  funFactSrc:
                      '/funFactImages/body_fossils/Gustafsonia cognita_NewBackground.webp',
                  silhouetteSrc:
                      '/silhouettes/body_fossils/Gustafsonia-cognita.svg',
                  silhouetteWidth: 150,
                  lightIntensity: 0.1,
                  modelScale: 0.45,
                  modelFileName: '/models/Body_Fossils/Gskull/Gskull_wRuler',
                  modelType: 'gltf',
                  modelPosition: [0, 0.2, 0],
              },
              lepidus: {
                  detailId: 'lepidus',
                  buttonLine1: 'Tibiotarsus',
                  buttonLine2: 'Lepidus praecisio',
                  headerText: 'Dino-Identity',
                  leadText:
                      'This dinosaur ankle joint is around 220 million years old--making it one of the oldest dinosaur fossils found in North America. Dinosaur ankles operate on a single hinge, an adaptation that allowed them to walk on two legs. ',
                  tombstoneLine1: 'Tibiotarsus',
                  tombstoneLine2: 'Lepidus praecisio',
                  tombstoneLine3: 'Laser Scan, 2024',
                  tombstoneLine4: 'Courtesy Adam Marsh and Chris Sagebiel',
                  funFact:
                      '<p>This early dinosaur lived in what would become North Texas during the Triassic period.</p><p>Only a few fragments of Lepidus praecisio have been found. </p><p>Luckily, the "fascinating fragments" include an ankle joint that distinguishes Lepidus from its reptile relatives. </p> ',
                  funFactSrc:
                      '/funFactImages/body_fossils/lepidus_praecisio.webp',
                  silhouetteSrc:
                      '/silhouettes/body_fossils/Lepidus praecisio.svg',
                  lightIntensity: 0.05,
                  modelFileName: '/models/Body_Fossils/Lepidus/Lepidus_wRuler',
                  modelScale: 0.03,
                  modelType: 'gltf',
                  modelRotation: [0, 0, 0],
                  modelPosition: [0, 0, 0],
              },
              poposaur: {
                  detailId: 'poposaur',
                  buttonLine1: 'Vertebra',
                  buttonLine2: 'Poposaurus langstoni',
                  headerText: 'Triassic Two Step',
                  leadText:
                      "Poposaurus walked across Texas on two legs, but it's not a dinosaur. It's from a group of archosaurs that are more closely related to modern crocodiles.  ",
                  tombstoneLine1: 'Vertebra',
                  tombstoneLine2: 'Poposaurus langstoni',
                  tombstoneLine3: 'Laser Scan, 2024',
                  tombstoneLine4: 'Courtesy Adam Marsh and Chris Sagebiel',
                  funFact:
                      "<p>This Poposaurus fossil was found near Big Spring, Texas and is part of UT Austin's collection.</p><p>A nearly complete skeleton was later found in Utah and is displayed in the Yale Museum.</p>",
                  funFactSrc: '/funFactImages/body_fossils/PoposaurusYale.webp',
                  silhouetteSrc:
                      '/silhouettes/body_fossils/Poposaurus_gracilis.svg',
                  lightIntensity: 0.025,
                  modelFileName:
                      '/models/Body_Fossils/poposaur/poposaur_wRuler',
                  modelScale: 0.0325,
                  modelType: 'gltf',
                  modelRotation: [0, 0, 0],
                  modelPosition: [0, 0, 0],
              },
          }
        : {}),
    ...(import.meta.env.PUBLIC_INTERACTIVE === 'putting_it_together' ||
    !import.meta.env.PUBLIC_INTERACTIVE
        ? {
              skeleton: {
                  detailId: 'skeleton',
                  buttonLine1: 'Skeleton',
                  headerText: 'Bone Clones',
                  leadText:
                      'To create this skeleton, paleoartists studied Ornithomimus fossil and talked to scientists to learn how the bones fit together.  Then, they used scans of existing fossils and digital modeling software to build the skeleton. ',
                  tombstoneLine1: 'Ornithomimus Skeletal Model',
                  tombstoneLine2: 'Autodesk 3ds Max',
                  tombstoneLine4: 'Artist Collaboration',
                  funFact:
                      '<p>This animal\'s name means "ostrich mimic."</p><p> Paleoartists study the skeletons of modern day ostriches to better understand this dinosaur\'s skeletal structure.</p>',
                  modelFileName: '/models/Putting_it_Together/skelturn4',
                  modelType: 'video',
              },
              'body-model': {
                  detailId: 'body-model',
                  buttonLine1: 'Body Model',
                  headerText: 'Muscle Mapping',
                  leadText:
                      'Using their knowledge of animal anatomy and muscle attachment points, a paleoartist digitally sculpted muscles, skin, and scales using the skeleton as a base. ',
                  tombstoneLine1: 'Ornithomimus Body Model',
                  tombstoneLine2: 'Maxon Zbrush',
                  tombstoneLine4: 'Courtesy Karen Carr',
                  funFact:
                      '<p>Because Ornithomimus was an herbivore, the artist sculpted a large belly area.</p><p> Plant-eating animals generally need more space for their stomach and intestines than meat-eating animals. </p>',
                  modelFileName: '/models/Putting_it_Together/greyTurn_2',
                  modelType: 'video',
              },
              'surface-details': {
                  detailId: 'surface-details',
                  buttonLine1: 'Surface Details',
                  headerText: 'Feather Features',
                  leadText:
                      'Fossil evidence shows that Ornithomimus had several types of feathers. The artist carefully created each type of feather as she applied them to the body model.  ',
                  tombstoneLine1: 'Ornithomimus',
                  tombstoneLine2: 'Blender',
                  tombstoneLine4: 'Courtesy Karen Carr',
                  funFact:
                      '<p>In a few cases artistic reconstruction, coloration can be informed by fossil pigment analysis.</p><p>For this model, the paleoartist used color patterns from a road-runner to inspire her Ornithomimus illustration.</p> ',
                  funFactSrc:
                      '/funFactImages/putting_it_together/Roadrunner.webp',
                  modelFileName: '/models/Putting_it_Together/feathered Turn_3',
                  modelType: 'video',
              },
          }
        : {}),
} as const
