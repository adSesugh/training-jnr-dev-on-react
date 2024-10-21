export default function ConfirmAlert() {
    return (
        <div className="h-[363px] w-[375px] bg-white rounded-[19.88px] px-[27px]">
            <div className="h-full space-y-8 place-content-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-2xl">Confirm</h1>
                    <p className="text-center">Are you sure you want to delete this payment method?</p>
                </div>
                <div className="flex flex-col space-y-3">
                    <button className="bg-yellow-600 w-full py-3 text-white rounded-full font-medium">Yes, proceed</button>
                    <button className="rounded-full w-full py-3 border border-black font-medium">Cancel</button>
                </div>
            </div>
        </div>
    )
}