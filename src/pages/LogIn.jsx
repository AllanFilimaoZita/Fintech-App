import Header from '../ui/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';


function LogIn() {

    return (
        <div className='min-h-screen min-w-screen flex flex-col items-start justify-center gap-8'>
            <Header>

                <h2 className='text-4xl font-medium px-4'>Log In</h2>

                <p className='text- text-gray-500 px-4'>
                    Please enter your phone number to proceed with logging into the app
                </p>

            </Header>

            <form className='w-full flex flex-col gap-4 px-4'>

                <Input text={'Phone Number'} textPlaceholder={'Phone Number'} />

            </form>

            <div className='w-full px-4 mb-70'>
                <Button textButton={'Continue'} />
            </div>

            <Footer text={'Do not have an account?'} link={'Sign Up'} />

        </div>
    )

}

export default LogIn