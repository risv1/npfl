import Image from "next/image";

const Loader: React.FC = () => {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
            <Image src="/load.svg" alt="Loader" width={50} height={50} />
        </div>
    )
}

export default Loader;