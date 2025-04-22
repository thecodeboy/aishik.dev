import PhotoGallery, { Photo } from "@/app/components/PhotoGallery"

export const metadata = {
    title: "Photos | Aishik Saha",
    description: "A collection of photos by Aishik Saha",
}

// Photos to display in the gallery
const photos: Photo[] = [
    {
        id: 1,
        src: "/photos/1.jpg",
        alt: "Alpine scenery of Engelberg, Switzerland",
        width: 4080,
        height: 2296,
        description: "Engelberg, Switzerland",
    },

]

export default function PhotosPage() {
    return (
        <div className="mt-12 mb-20">
            <h1 className="text-3xl font-bold mb-4">Photos</h1>
            <p className="mb-8 text-gray-600 dark:text-gray-400 max-w-2xl">
                A collection of moments captured through my lens. Each photo tells a story and represents a unique perspective.
                Click on any photo to view it in full size and read more about the story behind it.
            </p>
            <PhotoGallery photos={photos} />
        </div>
    )
}
