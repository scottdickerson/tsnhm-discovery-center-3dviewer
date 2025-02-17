import { contentData } from '@/data/contentData'
import FunFactDrawer from './FunFact'

export interface InfoBoxProps {
    selectedFootprint: keyof typeof contentData
}

export const InfoBox = ({ selectedFootprint }: InfoBoxProps) => {
    const currentFootprintDetail = contentData[selectedFootprint]

    return currentFootprintDetail ? (
        <div className="flex justify-between bg-lime-500 p-8 rounded-t-[40px] pr-12 h-60 relative ml-10 mr-10">
            <div className="flex flex-col gap-2 flex-grow">
                <h2 className="text-2xl pt-2 font-semibold text-black mb-2">
                    {currentFootprintDetail.headerText}
                </h2>
                <p className="text-gray-900 text-xl w-[698px]">
                    {currentFootprintDetail.leadText}
                </p>
            </div>
            <div className="align-top flex flex-col items-end text-lg text-black/60 leading-6 h-[174px]">
                <span className="inline-block">
                    {currentFootprintDetail.buttonLine1}
                </span>
                <span className="inline-block">
                    {currentFootprintDetail.tombstoneLine2}
                </span>
                <span className="inline-block">
                    {currentFootprintDetail.tombstoneLine3}
                </span>
                <span className="inline-block">
                    {currentFootprintDetail.tombstoneLine4}
                </span>
            </div>
            <FunFactDrawer selectedFootprint={selectedFootprint} />
        </div>
    ) : null
}
