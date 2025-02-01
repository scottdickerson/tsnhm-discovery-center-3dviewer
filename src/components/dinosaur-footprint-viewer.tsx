'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { contentData } from '@/data/contentData'

export interface DinosaurFootprintViewerProps {
    selectedFootprint: keyof typeof contentData
}
export default function DinosaurFootprintViewer({
    selectedFootprint,
}: DinosaurFootprintViewerProps) {
    const currentFootprintDetail = contentData[selectedFootprint]
    return (
        <div className="flex gap-6 p-6 bg-gray-900 text-white min-h-screen">
            {/* Sidebar */}
            <div className="w-72 flex flex-col gap-4">
                <Card className="p-6 bg-emerald-900 text-lime-400">
                    <h1 className="text-4xl font-bold mb-4">Technology WOW!</h1>
                    <p className="text-sm">
                        High-tech tools can create digital models of fossils.
                        Now scientists can preserve, share, and study these
                        traces of the past in new ways.
                    </p>
                </Card>

                <div className="space-y-2">
                    {Object.entries(contentData).map(
                        ([id, footprintDetail]) => (
                            <Button
                                key={id}
                                variant={
                                    selectedFootprint === id
                                        ? 'secondary'
                                        : 'ghost'
                                }
                                className="w-full justify-start bg-lime-600/20 hover:bg-lime-600/30 text-left"
                                onClick={() =>
                                    (window.location.href = `/${id}`)
                                }
                            >
                                <div>
                                    <div className="font-medium">
                                        {footprintDetail.title}
                                    </div>
                                    <div className="text-xs text-lime-400/70">
                                        {footprintDetail.location}
                                    </div>
                                </div>
                            </Button>
                        )
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-4">
                <div className="relative aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                    <img
                        src={currentFootprintDetail.src}
                        alt="3D scan of a dinosaur footprint"
                        className="object-cover"
                    />
                </div>

                {/* Info Box */}
                <div className="flex gap-2 bg-lime-500 p-6 rounded-lg pr-48 h-48">
                    <div className="flex flex-col gap-2 flex-grow">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">
                            {currentFootprintDetail.detailTitle}
                        </h2>
                        <p className="text-gray-900">
                            {currentFootprintDetail.detailDescription}
                        </p>
                    </div>

                    {/* Dinosaur Silhouette */}
                    <div className="relative basis-1/3">
                        <div className="w-32 h-16 absolute bottom-12 right-4">
                            <img
                                src={currentFootprintDetail.silhouetteSrc}
                                alt="Sauropod silhouette"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
