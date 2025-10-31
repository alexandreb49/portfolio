'use client';

import { Download, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


interface CVPopupProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CVPopup = ({ open, setOpen }: CVPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white text-black rounded-2xl p-6 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Download my CV
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Choose your preferred language
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4">
          <a
            href="/documents/CV_EN_ALEXANDRE_BERNARD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            <Download className="w-4 h-4" /> English CV
          </a>

          <a
            href="/documents/CV_FR_ALEXANDRE_BERNARD.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            <Download className="w-4 h-4" /> French CV
          </a>
        </div>

        <DialogClose asChild>
          <Button variant="ghost" className="mt-4 w-full">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export const NavbarCVButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/70 hover:bg-white/10 transition bg-transparent text-white hover:text-white"
        >
          Download CV <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <CVPopup open={open} setOpen={setOpen} />
    </Dialog>
  );
};


export const CVDownloadMainPage = ({
}) => {

    const [view, setView] = useState<boolean>(false)


  return (
    <Dialog open={view} onOpenChange={setView}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center gap-2 px-5 py-6 rounded-xl border border-white/70 hover:bg-white/10 transition bg-transparent text-white hover:text-white"
        >
          Download CV <ArrowRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>

      <CVPopup open={view} setOpen={setView} />
    </Dialog>
  );
};
