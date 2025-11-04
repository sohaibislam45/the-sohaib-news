import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
      <div className="p-3">
        <h2 className="font-semibold mb-3">Login With</h2>
        <div className="flex flex-col gap-3">
          <button className="btn btn-outline btn-info">
            <FcGoogle size={20} /> Log in with Google
          </button>
          <button className="btn btn-outline btn-primary">
            <FaGithub size={20} />
            Log in with Github
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;