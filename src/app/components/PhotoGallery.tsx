"use client"
import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Define the photo data structure
export type Photo = {
    id: number
    src: string
    alt: string
    width: number
    height: number
    description: string
}

type GalleryProps = {
    photos: Photo[]
}

export default function PhotoGallery({ photos }: GalleryProps) {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

    const openPhoto = (photo: Photo) => {
        setSelectedPhoto(photo)
        // Prevent scrolling when modal is open
        document.body.style.overflow = "hidden"
    }

    const closePhoto = () => {
        setSelectedPhoto(null)
        // Re-enable scrolling
        document.body.style.overflow = "auto"
    }

    return (
        <>
            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative overflow-hidden cursor-pointer" onClick={() => openPhoto(photo)}>
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={photo.src || "/placeholder.svg"}
                                    alt={photo.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4">
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{photo.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for enlarged photo */}
            {selectedPhoto && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closePhoto}>
                    <div
                        className="relative max-w-5xl w-full flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the photo
                    >
                        <button
                            onClick={closePhoto}
                            className="absolute top-2 right-2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            aria-label="Close photo"
                        >
                            <X size={24} />
                        </button>
                        <div className="relative w-full flex items-center justify-center">
                            <Image
                                src={selectedPhoto.src || "/placeholder.svg"}
                                alt={selectedPhoto.alt}
                                width={selectedPhoto.width}
                                height={selectedPhoto.height}
                                className="object-contain max-h-[75vh] rounded-lg"
                            />
                        </div>
                        <div className="mt-4 bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white max-w-3xl mx-auto">
                            <p className="text-center">{selectedPhoto.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
