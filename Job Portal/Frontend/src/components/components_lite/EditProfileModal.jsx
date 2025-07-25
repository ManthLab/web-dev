
import React from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { USER_API_ENDPOINT } from '@/utils/data';
import { setUser } from '@/redux/authSlice';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const EditProfileModal = ({ open, setOpen }) => {
    const [loading, setLoading] = useState(false);
    const {user} = useSelector((store) => store.auth);

    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phonenumber,
        bio: user?.profile.bio,
        skills: user?.profile?.skill?.map((skills) => skills),
        file: user?.profile?.file,
    });
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value });
    }; 
    const handleFileChange = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData .append('email', input.email);
        formData.append('phonenumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);

        if (input.file) {
            formData.append('file', input.file);
        }

        try {
            setLoading(true);
            const res = await axios.post(`${USER_API_ENDPOINT}/profile/update`, formData, {
                headers: {'Content-Type':'multipart/form-data'},
                withCredentials: true,
            });
            if (res.data.success) {
                // dispatch (sertUser(res.data.user));
                dispatch(setUser({...res.data.user,skills: input.skills}));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to update profile');
            
        }finally{
            setLoading(false);
        }
        setOpen(false);
    
        console.log(input);
    };

    const FileChangehandler = (e) => {
        const file = e.target.files?.[0];
        setInput({...input, file });
    };

  return (
    <div>
        <Dialog open={open}>
            <DialogContent className="sm:max-w-[500px]" 
            onInteractOutside={() => setOpen(false)} >
                <DialogHeader>
                    <DialogTitle>
                        Edit Profile
                    </DialogTitle>
                </DialogHeader>
                {/* Form for editing Profile */}
                <form onSubmit={ handleFileChange}>
                    <div className='grid gap-4 py-4'>
                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "name" className="text-right">
                            Name
                        </Label>
                        <input 
                        type="text"
                        id="name"
                        value={input.fullname}
                        onChange={changeEventHandler}
                        name="fullname"
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "email" className="text-right">
                            Email
                        </Label>
                        <input 
                        type="email"
                        id="email"
                        value={input.email}
                        onChange={changeEventHandler}
                        name="email"
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                    </div>

                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "phone" className="text-right">
                            Phone
                        </Label>
                        <input 
                        type="tel"
                        id="phonenumber"
                        value={input.phoneNumber}
                        onChange={changeEventHandler}
                        name="phoneNumber"
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                        </div>

                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "bio" className="text-right">
                            Bio
                        </Label>
                        <input 
                        type="text"
                        id="bio"
                        value={input.bio}
                        onChange={changeEventHandler}
                        name="bio"
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                        </div>    

                        {/* skills */}
                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "skills" className="text-right">
                            Skills
                        </Label>
                        <input 
                        type="text"
                        id="skills"
                        value={input.skills}
                        onChange={changeEventHandler}
                        name="skills"
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                        </div>  

                        {/* Resume file upload   */}
                        <div className='grid grid-cols-4 items-center gap-4'>
                        <Label htmlFor = "file" className="text-right">
                            Resume
                        </Label>
                        <input 
                        type="file"
                        id="file"
                        name="file"
                        accept="application/pdf"
                        onChange={FileChangehandler}
                        className='col-span-3 border border-gray-300 rounded-md p-2'
                        />
                        </div>  
                    </div>
                    <DialogFooter>
                    {loading? (
        <Button className="w-full my-4">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button type="submit" className="w-full my-4">
            Save
        </Button>
      )}
     </DialogFooter>
  </form>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default EditProfileModal;