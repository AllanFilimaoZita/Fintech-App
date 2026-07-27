import { IoMdBackspace } from "react-icons/io";
import PinButton from '../components/PinButton';
import { IoChevronBackOutline } from "react-icons/io5";



function EnterPin() {
    
    return (

        <div className="flex flex-col items-center justify-center w-full h-full px-4 py-5">
            <div className="flex items-center justify-start w-full ">
                <button className='bg-white rounded-full h-12 w-12 flex items-center justify-center mb-10'>
                    <IoChevronBackOutline className="size-9" />
                </button>
            </div>

            <div className="flex flex-col items-center mb-10">

                <h2 className="text-2xl font-bold">Enter PIN</h2>
                <p className="text-gray-500">
                    Please enter your PIN number to login
                </p>

            </div>

            <div className="flex gap-9">

                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>

            </div>

            <div className="flex flex-col gap-5 items-center justify-center mt-30 ">

                <h3 className="text-green-700 font-bold ">Forgot PIN</h3>
                
                <section className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <PinButton number={1} />
                        <PinButton number={2} />
                        <PinButton number={3} />
                    </div>
                    <div className="flex gap-4">
                        <PinButton number={4} />
                        <PinButton number={5} />
                        <PinButton number={6} />
                    </div>
                    <div className="flex gap-4">
                        <PinButton number={7} />
                        <PinButton number={8} />
                        <PinButton number={9} />
                    </div>
                    <div className="flex gap-4">
                        <button className="text-2xl text-black w-20 h-15"></button>
                        <PinButton number={0} />
                        <button className="flex items-center justify-center text-2xl text-black w-20 h-15 "><IoMdBackspace /></button>
                    </div>
                </section>

            </div>

        </div>

    )

}

export default EnterPin