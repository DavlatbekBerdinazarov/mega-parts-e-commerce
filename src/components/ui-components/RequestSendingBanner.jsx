import React from 'react'
import { bannerRequest } from '@/assets/images/z-index'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {Button} from '../ui/button'

export default function RequestSendingBanner() {
  return (
    <div className='w-full h-[223px] lg:h-[446px] relative'>
        <img className='h-full w-full' src={bannerRequest} alt="banner" />
        <div className='w-full h-full absolute top-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-4 lg:py-8 flex justify-between  rounded-lg'>
          {/* content */}
          <div className="w-[440px] text-white">
            <h1 className="text-2xl md:text-3xl md:mb-2 mb-3 lg:my-3 font-semibold">An easy way to send requests to all suppliers</h1>
            <p className="text-md md:text-lg hidden md:block my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <Button type="submit block lg:hidden" className="w-[160px] text-lg">Send inquery</Button>
          </div>
          {/* form */}
          <div className="hidden lg:block w-2/5 max-h-[346px]">
            <form className=' bg-white w-full h-full rounded-md p-6 flex flex-col gap-4'>
              <h1 className='font-bold text-xl'>Send quote to suppliers</h1>
              <Input className=" rounded-sm focus:border-none border-2 border-indigo-500" type='text'placeholder="What item you need?"/>
              <Textarea className="focus:border-none border-2 border-indigo-500" placeholder="type something"/>
              <div className="flex gap-4">
                <Input className="w-1/2 rounded-sm focus:border-none border-2 border-indigo-500" type='text'placeholder="What item you need?"/>
                <Select className=" border-indigo-500">
                  <SelectTrigger className="w-[100px] focus:border-none border-2 border-indigo-500">
                    <SelectValue placeholder="Psc" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Psc</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Button */}
              <Button type="submit" className="w-[160px] text-lg">Send inquery</Button>
            </form>
          </div>
        </div>
    </div>
  )
}
