'use client'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import { contentData } from '@/data/contentData'
import { VisuallyHidden } from 'radix-ui'
import { forwardRef, useState } from 'react'
import parse from 'html-react-parser'

const FunFactButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, ...props }, ref) => {
        return (
            <Button
                {...props}
                ref={ref}
                className={`font-archivo bg-funFactBackground hover:bg-funFactBackground text-[#9FD71C] focus:outline-none focus:border-none font-black rounded-none rounded-t-2xl px-10 py-8 text-3xl translate-y-[10px] ${className}`}
            >
                <span className="animate-bounce duration-2000 ease-in-out">
                    FUN FACT
                </span>
            </Button>
        )
    }
)

export interface FunFactDrawerProps {
    selectedFootprint: keyof typeof contentData
}
export default function FunFactDrawer({
    selectedFootprint,
}: FunFactDrawerProps) {
    const [open, setOpen] = useState(false)
    const selectedFootprintData = contentData[selectedFootprint]
    const drawerTriggerOffset = {
        left: 'left-5',
        right: 'right-5',
    }
    return (
        <div
            className={`flex justify-end absolute ${drawerTriggerOffset.left} ${drawerTriggerOffset.right} bottom-0 `}
        >
            <Drawer
                direction="bottom"
                open={open}
                onOpenChange={setOpen}
                dismissible={open}
            >
                <DrawerTrigger asChild>
                    <div className="flex flex-col pl-4 pr-4 w-full">
                        {/* Dinosaur Silhouette */}
                        {selectedFootprintData.silhouetteSrc ? (
                            <div className="relative basis-1/3">
                                <div className="absolute -bottom-16 right-64">
                                    <img
                                        src={
                                            selectedFootprintData.silhouetteSrc
                                        }
                                        alt="Sauropod silhouette"
                                        style={{
                                            minWidth: `${selectedFootprintData.silhouetteWidth ? selectedFootprintData.silhouetteWidth : '289'}px`,
                                        }}
                                        className={`object-contain`}
                                    />
                                </div>
                            </div>
                        ) : null}
                        <FunFactButton className="self-end" disabled={open} />
                        <div className=" bg-funFactBackground h-14 rounded-tl-4xl  "></div>
                    </div>
                </DrawerTrigger>
                <DrawerContent
                    onClick={(e) => !open && e.stopPropagation()}
                    className="bg-funFactBackground text-white border-none left-[34.5rem] right-[76px] rounded-tl-3xl rounded-tr-none rounded-bl-none pr-10 z-2000 "
                >
                    <VisuallyHidden.Root>
                        <DrawerTitle>Fun Fact</DrawerTitle>
                    </VisuallyHidden.Root>
                    <DrawerClose asChild>
                        <FunFactButton
                            className={`absolute right-0 -top-16 transition duration-0 delay-650`}
                        />
                    </DrawerClose>
                    <DrawerClose>
                        <div className="mx-auto px-20 pt-20 pb-10 flex gap-4">
                            <DrawerHeader hidden>
                                <DrawerDescription
                                    className="text-white/90 space-y-4 text-[22px] leading-8"
                                    asChild
                                >
                                    <div className="flex flex-col gap-2 max-w-[516px]">
                                        {parse(
                                            selectedFootprintData.funFact
                                                .split('\n')
                                                .map((line) => `<p>${line}</p>`)
                                                .join('')
                                        )}
                                    </div>
                                </DrawerDescription>
                            </DrawerHeader>
                            <img
                                className=" h-[380px] bg-white/20 rounded-lg mb-4"
                                src={selectedFootprintData.funFactSrc}
                            />
                        </div>
                    </DrawerClose>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
