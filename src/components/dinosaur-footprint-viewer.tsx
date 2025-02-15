import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { contentData } from '@/data/contentData'
import { InfoBox } from './InfoBox'
import { ObjModelViewer } from './ObjModelViewer'

export interface DinosaurFootprintViewerProps {
    selectedFootprint: keyof typeof contentData
}
export default function DinosaurFootprintViewer({
    selectedFootprint,
}: DinosaurFootprintViewerProps) {
    const currentFootprintDetail = contentData[selectedFootprint]
    return (
        <div className="flex pb-0 bg-gray-900 text-white min-h-screen">
            {/* Sidebar */}
            <div className="w-[480px] flex flex-col gap-4 p-10 bg-sidebar-pattern">
                <Card className="p-10 bg-black/50 text-lime-400 pb-32 border-none rounded-3xl">
                    <h1 className="mb-8 font-commissioner leading-[80px] flex flex-col">
                        <span className="text-[53px]  font-semibold inline-block">
                            Technology
                        </span>{' '}
                        <span className="text-[97px] font-bold inline-block self-end">
                            WOW!
                        </span>
                    </h1>
                    <p className="text-2xl leading-9 text-white px-4">
                        High-tech tools can create digital models of fossils.
                        Now scientists can preserve, share, and study these
                        traces of the past in new ways.
                    </p>
                    <div className="flex flex-col gap-8 mt-20">
                        {Object.entries(contentData).map(
                            ([id, footprintDetail]) => (
                                <Button
                                    key={id}
                                    variant={
                                        selectedFootprint === id
                                            ? 'secondary'
                                            : 'ghost'
                                    }
                                    className={`w-full justify-start ${selectedFootprint === id ? 'bg-[#9FD71C]' : 'bg-lime-600/70'} rounded-3xl py-14 text-center text-black`}
                                    onClick={() =>
                                        (window.location.href = `/${id}`)
                                    }
                                >
                                    <div className="text-xl leading-6 w-full">
                                        <div className="font-bold ">
                                            {footprintDetail.title}
                                        </div>
                                        <div className="font-medium">
                                            {footprintDetail.location}
                                        </div>
                                    </div>
                                </Button>
                            )
                        )}
                    </div>
                </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-10">
                <div className="relative ">
                    {/*  Will be replaced by the object or video viewer */}
                    <ObjModelViewer
                        modelFileName={currentFootprintDetail.modelFileName}
                        modelScale={currentFootprintDetail.modelScale}
                    />
                    {/* <img
                        src={currentFootprintDetail.src}
                        alt="3D scan of a dinosaur footprint"
                        className="object-cover w-full max-h-[803px]"
                    /> */}
                </div>
                <InfoBox selectedFootprint={selectedFootprint} />
            </div>
        </div>
    )
}
