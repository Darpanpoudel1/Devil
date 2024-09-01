// components/InteractiveForm.js
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const InteractiveForm = () => {
  const [selected, setSelected] = useState(null);
  const [role , setRole] = useState(" ");
  

  const handleSelect = (option:any) => {
    setSelected(option);
  };

  const router = useRouter();
      
    // if(selected=='Client'){
    //     router.push('/dashboard')
    // }
    // else{
    //   router.push('/onBoarding')
    // }
    
    // }
    // selected=='Client' ? router.push('/dashboard') : router.push('/onBoarding')
    
    
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded shadow-md text-center"
      >
        <h2 className="text-2xl font-semibold mb-6">Select Option</h2>
        <div className="space-x-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded ${selected === 'Client' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleSelect('Client')}
          >
            Client
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`px-4 py-2 rounded ${selected === 'User' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleSelect('User')}
          >
            User
          </motion.button>
        </div>
        {selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6"
          >
            <p className="text-xl">You selected: {selected}</p>
          </motion.div>
        )}
      </motion.div>
    </div>


  );
};

export default InteractiveForm;
