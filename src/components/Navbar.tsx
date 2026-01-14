import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-[#f8f9fa] border-b border-[#dee2e6] py-3 px-4 mb-4">
            <div className="container mx-auto max-w-5xl flex items-center justify-between">
                <Link href="/" className="text-xl font-medium text-[#212529] no-underline hover:text-black">
                    IPA Practice
                </Link>
                <div>
                    <Link href="/" className="text-[#0d6efd] hover:text-[#0a58ca] font-normal">Home</Link>
                </div>
            </div>
        </nav>
    );
}
