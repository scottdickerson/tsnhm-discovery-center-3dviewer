export type InteractiveId =
    | 'tracks_and_traces'
    | 'body_fossils'
    | 'putting_it_together'
export enum InteractiveIdEnum {
    TRACKS_AND_TRACES = 'tracks_and_traces',
    BODY_FOSSILS = 'body_fossils',
    PUTTING_IT_TOGETHER = 'putting_it_together',
}
export interface ContentData {
    interactiveId: InteractiveIdEnum
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
                  interactiveId: InteractiveIdEnum.TRACKS_AND_TRACES,
                  detailId: 'sauropod',
                  buttonLine1: 'Sauropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Earth-shaking Sauropod',
                  leadText:
                      'Because of its enormous size, scientists think that a <em>Sauroposeidon</em> made this track. \n Named for the Greek god of oceans and earthquakes, this long-necked dinosaur made the ground shake with each step!',
                  tombstoneLine1: 'Sauropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
                  funFact:
                      'During the summer of 2022, a drought lowered the water levels of the Paluxy River, briefly revealing many never-before-seen dinosaur footprints. \n A team of volunteers from the Dallas Paleontological Society, including Glen Kuban and Paul Baker rushed to clean, record, and measure the tracks before the drought ended.',
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
                  interactiveId: InteractiveIdEnum.TRACKS_AND_TRACES,

                  detailId: 'theropod',
                  buttonLine1: 'Theropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Claws!',
                  leadText:
                      'Researchers think that a large <em>Acrocanthosaurus</em> made this track, which preserves the impression of this predatorʼs toes and sharp claws. \n This three-toed, meat-eating dinosaur chased after its prey on its two powerful hind legs.',
                  tombstoneLine1: 'Theropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
                  funFact:
                      'Flooding and fast moving waters can destroy fossil footprints. \n Digital scanning preserves information about these prints for the future.',
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
                  interactiveId: InteractiveIdEnum.TRACKS_AND_TRACES,
                  detailId: 'footprint3',
                  buttonLine1: 'Theropod Footprint',
                  buttonLine2: 'Dinosaur Valley State Park',
                  headerText: 'Predator Prints',
                  leadText:
                      'Dinosaur Valley State Park was was once a vast Cretaceous shoreline where <em>Acrocanthosaurus</em> may have hunted <em>Sauroposeidon</em> searching for food. ',
                  tombstoneLine1: 'Theropod Footprint',
                  tombstoneLine2: '3D Photogrammetry, 2023',
                  tombstoneLine3: 'Dinosaur Valley State Park',
                  tombstoneLine4: 'Courtesy Paul Baker',
                  funFact:
                      'This is one of the largest theropod prints ever documented at Dinosaur Valley State Park. \n It is usually underwater, but was briefly visible during a drought. ',
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
                  interactiveId: InteractiveIdEnum.BODY_FOSSILS,

                  detailId: 'skull',
                  buttonLine1: 'Skull',
                  buttonLine2: '<em>Gustafsonia cognita</em>',
                  headerText: 'One of a Kind',
                  leadText:
                      'This skull is currently the only known fossil from this species. <em>Gustafsonia</em> is part of a diverse group of extinct mammals that are often called "beardogs" and is about 36.5 million years old.',
                  tombstoneLine1: 'Mammal Skull',
                  tombstoneLine2: '<em>Gustafsonia cognita</em>',
                  tombstoneLine3:
                      'High-resolution X-ray computed tomography, 2007',
                  tombstoneLine4: 'Courtesy Therese Flink and Richard Ketcham',
                  funFact:
                      '<em>Gustafsonia</em> was discovered by Dr. John A. Wilson and his UT Austin field crew in 1966. \n It was given a new name in 2016 as researchers learned more about the species after studying the fossil and the scan data.',
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
                  interactiveId: InteractiveIdEnum.BODY_FOSSILS,
                  detailId: 'lepidus',
                  buttonLine1: 'Tibiotarsus',
                  buttonLine2: '<em>Lepidus praecisio</em>',
                  headerText: 'Dino-Identity',
                  leadText:
                      'This dinosaur ankle joint is around 220 million years old - making it one of the oldest dinosaur fossils found in North America. Dinosaur ankles operate on a single hinge, an adaptation that allowed them to walk on two legs.  ',
                  tombstoneLine1: 'Dinosaur Ankle',
                  tombstoneLine2: '<em>Lepidus praecisio</em>',
                  tombstoneLine3: 'Laser Scan, 2024',
                  tombstoneLine4: 'Courtesy Adam Marsh and Chris Sagebiel',
                  funFact:
                      'This early dinosaur lived in what would become North Texas during the Triassic period. \n Only a few fragments of <em>Lepidus praecisio</em> have been found. Luckily, the "fascinating fragments" include this tibiotarsus that distinguishes <em>Lepidus</em> from its reptile relatives.  ',
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
                  interactiveId: InteractiveIdEnum.BODY_FOSSILS,

                  detailId: 'poposaur',
                  buttonLine1: 'Vertebra',
                  buttonLine2: '<em>Poposaurus langstoni</em>',
                  headerText: 'Triassic Two Step',
                  leadText:
                      "<em>Poposaurus</em> walked across Texas on two legs, but it's not a dinosaur. It's from a group of archosaurs that are more closely related to modern crocodiles. ",
                  tombstoneLine1: 'Archosaur Vertebra',
                  tombstoneLine2: '<em>Poposaurus langstoni</em>',
                  tombstoneLine3: 'Laser Scan, 2024',
                  tombstoneLine4: 'Courtesy Adam Marsh and Chris Sagebiel',
                  funFact:
                      "This <em>Poposaurus</em> fossil was found near Big Spring, Texas and is part of UT Austin's collection. \n A nearly complete skeleton was later found in Utah and is displayed in Yale Peabody Museum in Connecticut. ",
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
                  interactiveId: InteractiveIdEnum.PUTTING_IT_TOGETHER,
                  detailId: 'skeleton',
                  buttonLine1: 'Skeleton',
                  headerText: 'Bone Building',
                  leadText:
                      'To create this skeleton, paleoartists studied <em>Ornithomimus</em> fossils and talked to scientists to learn how the bones fit together.  Then, they used scans of existing fossils and digital modeling software to build the skeleton.  ',
                  tombstoneLine1: '<em>Ornithomimus</em> Skeletal Model',
                  tombstoneLine2: 'Autodesk 3ds Max',
                  tombstoneLine4: 'Artist Collaboration',
                  funFact:
                      'This animal\'s name means \"bird mimic.\" \n Paleoartists study the skeletons of modern day ostriches to better understand this dinosaur\'s skeletal structure.',
                  modelFileName: '/models/Putting_it_Together/skelturn4',
                  modelType: 'video',
              },
              'body-model': {
                  interactiveId: InteractiveIdEnum.PUTTING_IT_TOGETHER,
                  detailId: 'body-model',
                  buttonLine1: 'Body Model',
                  headerText: 'Muscle Mapping',
                  leadText:
                      'Using her knowledge of animal anatomy and muscle attachment points, a paleoartist digitally sculpted muscles, skin, and scales using the skeleton as a base. ',
                  tombstoneLine1: '<em>Ornithomimus</em> Body Model',
                  tombstoneLine2: 'Maxon Zbrush',
                  tombstoneLine4: 'Courtesy Karen Carr',
                  funFact:
                      'Because <em>Ornithomimus</em> was an herbivore, the artist sculpted a large belly area. \n Plant-eating animals generally need more space for their stomach and intestines than meat-eating animals. ',
                  modelFileName: '/models/Putting_it_Together/greyTurn_2',
                  modelType: 'video',
              },
              'surface-details': {
                  interactiveId: InteractiveIdEnum.PUTTING_IT_TOGETHER,
                  detailId: 'surface-details',
                  buttonLine1: 'Surface Details',
                  headerText: 'Feather Features',
                  leadText:
                      'Fossil evidence shows that <em>Ornithomimus</em> had several types of feathers. \n The artist carefully created each type of feather as she applied them to the body model.   ',
                  tombstoneLine1: '<em>Ornithomimus</em> Complete Model',
                  tombstoneLine2: 'Blender',
                  tombstoneLine4: 'Courtesy Karen Carr',
                  funFact:
                      "In rare cases, information about an extinct animal's coloration can be preserved in a fossil. \n Most of the time artists look at living animals for color inspiration. \n For this model, the paleoartist used color patterns from a roadrunner to inspire her <em>Ornithomimus</em> illustration.  ",
                  funFactSrc:
                      '/funFactImages/putting_it_together/Roadrunner.webp',
                  modelFileName: '/models/Putting_it_Together/feathered Turn_3',
                  modelType: 'video',
              },
          }
        : {}),
} as const
