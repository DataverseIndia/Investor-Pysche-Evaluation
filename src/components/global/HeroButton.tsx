'use client';

import { FC, useState } from 'react';
import { Button } from '@nextui-org/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { createClient } from '@supabase/supabase-js';
import { showToast } from '@/helpers/toasts';
import { Input } from '../ui/input';


const HeroButton: FC = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        code: '',
        phone: '',
        whatsapp: '',
        country: ''
    });
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^\d+$/;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({ ...userData, [event.target.id]: event.target.value });
    };
    const supabase = createClient(
        'https://dpekexhkedtxderitddq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZWtleGhrZWR0eGRlcml0ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjE4OTYsImV4cCI6MjAyOTY5Nzg5Nn0.o2Q0Aj_2eNCwxJIecPGPQyymQH_w5f1bcCN7zOJn4dc',
    );
    const handleSubmit = async () => {
      const isValidEmail = emailRegex.test(userData.email);
      const isValidPhone = phoneRegex.test(userData.phone);
      if (!isValidEmail) {
        showToast("Not a valid email", false)
         return;
       }

       if (!isValidPhone) {
         showToast("Not a valid phone number", false)
         return;
       }
        try {
            const { error } = await supabase.from('userdata').insert(userData);

            if (error) {
                showToast("Try again later", false)
            } else {
                showToast("You are sigend up", true)
                setUserData({
                    name: '',
                    email: '',
                    code: '',
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
                <Button className="bg-yellow-200/70 animation hover:bg-yellow-300/70 rounded-full -ml-1 phone:px-[3.5rem] lg:px-10 py-6 outline-none text-sm tracking-tighter font-semibold text-[#0b0e0f] overflow-hidden">
                    Join
                </Button>
            </DialogTrigger>
            <DialogContent className="phone:w-[95%] rounded-md lg:w-[40vw]">
                <DialogHeader>
                    <DialogTitle className='text-2xl tracking-tighter'>Join us</DialogTitle>
                    <DialogDescription>
                        Sign up for insight-worthy newsletter and updates.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4 w-full">
                        <h1 className="text-right">Name</h1>
                        <Input
                            id="name"
                            placeholder="Your name"
                            className="col-span-3"
                            value={userData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Email</h1>
                        <Input
                            id="email"
                            placeholder="name@email.com"
                            className="col-span-3"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Country</h1>
                        <Input
                            id="country"
                            placeholder=""
                            className="col-span-3"
                            value={userData.country}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right">Whatsapp</h1>
                        <Input
                            id="whatsapp"
                            placeholder=""
                            className="col-span-3"
                            value={userData.whatsapp}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <h1 className="text-right text-nowrap">Phone No.</h1>
                        <Input
                            id="phone"
                            placeholder=""
                            className="col-span-3"
                            value={userData.phone}
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
                        Save changes
                    </Button>
                  </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default HeroButton;
