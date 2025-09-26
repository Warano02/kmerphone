function Title({ text }: { text: string }) {
    return (
        <div className="flex w-full h-16 justify-center items-center gap-2 my-2">
            <span className="w-[100px] h-[1.2px] bg-secondary "></span>
            <h1 className="text-xl lg:text-2xl font-bold font-monserat">{text} </h1>
            <span className="w-[100px] h-[1.2px] bg-secondary "></span>
        </div>
    )
}

export default Title