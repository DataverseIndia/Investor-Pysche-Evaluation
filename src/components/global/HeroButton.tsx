import { FC, useState } from 'react';
import { Button } from '@nextui-org/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { createClient } from '@supabase/supabase-js';
import { showToast } from '@/helpers/toasts';
import { Input } from '../ui/input';

const HeroButton: FC<{ buttonClassName?: string, buttonText?: string }> = ({ buttonClassName, buttonText = 'Join' }) =>{
    const handleDownload = () => {
        const pdfUrl = '/sample.pdf';
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'sample.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Failed to download PDF:', error);
            });
    };
    const [enquiries, setEnquiries] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        country: ''
    });
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\d+$/;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnquiries({ ...enquiries, [event.target.id]: event.target.value });
    };
    const supabase = createClient(
        "https://tbzxbltcpaghivdwlyup.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRienhibHRjcGFnaGl2ZHdseXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3MTIyMDMsImV4cCI6MjAzMjI4ODIwM30.FrGZO0VrOUugGSIRzprbINCESSPts7AchDlpOLfMZEw",
    );
    const handleSubmit = async () => {
      const isValidEmail = emailRegex.test(enquiries.email);
      const isValidPhone = phoneRegex.test(enquiries.phone);
      if (!isValidEmail) {
        showToast("Not a valid email", false)
         return;
       }

       if (!isValidPhone) {
         showToast("Not a valid phone number", false)
         return;
       }
        try {
            const { error } = await supabase.from('enquiries').insert(enquiries);

            if (error) {
                showToast("Try again later", false)
            } else {
                showToast("You are signed up", true);
                handleDownload();
                setEnquiries({
                    name: '',
                    email: '',
                    phone: '',
                    whatsapp: '',
                    country: ''
                });
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={`bg-yellow-200/70 animation hover:bg-yellow-300/70 rounded-full -ml-1 phone:px-[3.5rem] lg:px-10 py-6 outline-none text-sm tracking-tighter text-[#0b0e0f] overflow-hidden ${buttonClassName}`}>
                    {buttonText}
                </Button>
            </DialogTrigger>
            <DialogContent className="phone:w-[95%] rounded-md lg:w-[40vw]">
                <DialogHeader>
                    <DialogTitle className='text-xl tracking-tighter text-center'>Signup for a free sample </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4 w-full">
                        <h1 className="text-right">Name</h1>
                        <Input
                            id="name"
                            placeholder="Your name"
                            className="col-span-3"
                            value={enquiries.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Email</h1>
                        <Input
                            id="email"
                            placeholder="name@email.com"
                            className="col-span-3"
                            value={enquiries.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Country</h1>
                        <Input
                            id="country"
                            placeholder=""
                            className="col-span-3"
                            value={enquiries.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Whatsapp</h1>
                        <Input
                            id="whatsapp"
                            placeholder=""
                            className="col-span-3"
                            value={enquiries.whatsapp}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right text-nowrap">Phone No.</h1>
                        <Input
                            id="phone"
                            placeholder=""
                            className="col-span-3"
                            value={enquiries.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                     <Button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-neutral-900 rounded-md text-neutral-100"
                    >
                        Download Sample
                    </Button>
                  </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default HeroButton;
