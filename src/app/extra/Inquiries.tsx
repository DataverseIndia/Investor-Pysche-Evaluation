import { FC, useEffect, useState } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { createClient } from '@supabase/supabase-js';
import { UserData } from '@/types/userDataProps';
import { Skeleton } from '@/components/ui/skeleton';

const Inquiries: FC = () => {
    const [userData, setUserData] = useState<UserData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const supabase = createClient(
        'https://dpekexhkedtxderitddq.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwZWtleGhrZWR0eGRlcml0ZGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjE4OTYsImV4cCI6MjAyOTY5Nzg5Nn0.o2Q0Aj_2eNCwxJIecPGPQyymQH_w5f1bcCN7zOJn4dc',
    );
    useEffect(() => {
        const handleGetUsers = async () => {
            const { data } = await supabase.from('userdata').select('*');
            setUserData(data);
            setLoading(false);
        };
        handleGetUsers();
    }, []);
    return (
        <section className="flex flex-col min-h-screen">
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/background.webp" alt="" />
            </div>
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/box-pattern.svg" alt="" />
            </div>
            <Navbar />
            <div className='phone:w-[90%] lg:w-[80%] mx-auto scroll'>
                <Table className="phone:my-[20vh] lg:my-[10vw]">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Country</TableHead>
                            <TableHead className="">Phone</TableHead>
                            <TableHead className="text-right">Whatsapp</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        <Skeleton className="h-5 w-[250px] rounded" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[250px] rounded" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[250px] rounded" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[250px] rounded" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="h-5 w-[250px] rounded ml-auto" />
                                    </TableCell>
                                </TableRow>
                            </>
                        ) : (
                            <>
                                {userData &&
                                    userData.map(user => (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">
                                                {user.name}
                                            </TableCell>
                                            <TableCell>
                                                <a href={`mailto:${user.email}`} className="hover:text-indigo-500 animation">
                                                   {user.email}
                                                </a>
                                            </TableCell>
                                            <TableCell>{user.country}</TableCell>
                                            <TableCell>
                                                <a href={`tel:${user.phone}`} className="hover:text-indigo-500 animation">
                                                   {user.phone}
                                                </a>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <a href={`https://wa.me/${user.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 animation">
                                                   {user.whatsapp}
                                                </a>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </>
                        )}
                    </TableBody>
                </Table>
            </div>
            <Footer />
        </section>
    );
};

export default Inquiries;
