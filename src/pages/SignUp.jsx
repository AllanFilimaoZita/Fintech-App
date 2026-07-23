import Header from '../ui/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';

function SignUp() {

    return (
        <div className='min-h-screen min-w-screen flex flex-col items-start justify-center gap-8'>
            <Header>
                <h2 className='text-4xl font-medium px-4'>Sign Up</h2>

                <p className='text-lg text-gray-500 px-4'>
                    Please fill out the form below to proceed with creating an account.
                </p>
            </Header>

            <form className='w-full flex flex-col gap-4 px-4'>

                <Input text={'Name'} textPlaceholder={'Input Name'} />
                <Input text={'Email'} textPlaceholder={'Input Email'} />
                <Input text={'Phone Number'} textPlaceholder={'Input Phone Number'} />
                
            </form>

            <div className='w-full px-4'>
                <Button textButton={'Continue'} />
            </div>

            <Footer text={'Already have an Account?'} link={'Log In'} />
            
        </div>
    )

}

export default SignUp