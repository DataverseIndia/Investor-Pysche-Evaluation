import { Button } from '@nextui-org/button';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const DesktopNavbar: FC = () => {
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
    return (
        <section className="px-[10vw] grid grid-cols-3 py-3 fixed backdrop-blur-md z-30 w-full">
            <Link to="/" className="mr-auto flex gap-3">
                <img src="/Logo.svg" alt="logo" className="w-6 h-6 my-auto" />
                <h1 className="my-auto font-medium">Investor Psyche Evaluation</h1>
            </Link>
            <div className="text-neutral-600 font-light flex my-auto justify-between">
                <Link to="/" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Features
                </Link>
                <Link to="/" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Pricing
                </Link>
                <Link to="/" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Resources
                </Link>
                <Link
                    to="/contact-us"
                    className="hover:bg-white/40 animation px-5 py-2 rounded-full text-nowrap"
                >
                    Contact Us
                </Link>
            </div>
            <div className="flex gap-3 ml-auto">
                <Button className='bg-neutral-900 rounded-md text-white' onClick={handleDownload}>Download Sample</Button>
            </div>
        </section>
    );
};

export default DesktopNavbar;
