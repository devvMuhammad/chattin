"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import SearchBar from "./SearchBar";
// import { Label } from "@/components/ui/label";

export default function SearchUsers() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Start a Chat</Button>
      </DialogTrigger>
      <DialogContent className="border border-gray-600 p-8 top-[125px] translate-y-0">
        <SearchBar />
      </DialogContent>
    </Dialog>
  );
}
