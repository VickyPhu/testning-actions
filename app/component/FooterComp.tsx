import Image from 'next/image'

export default function FooterComp() {
    return (
        <footer className="bg-gray-100 py-8 mt-auto border-t">
            <div className="container mx-auto px-4 text-center">
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                    Powered by{' '}
                    <Image
                        alt="Next.js logo"
                        src="/vercel.svg"
                        width={72}
                        height={16}
                        className="dark:invert"
                    />
                </a>
            </div>
        </footer>
    )
}