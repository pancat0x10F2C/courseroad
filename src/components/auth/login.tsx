'use client';

import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  Divider,
  Form,
  Input,
  Link,
  ResizablePanel,
} from '@heroui/react';
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';

import {
  GitHubIcon,
  GoogleIcon,
  LeftArrowIcon,
  LetterIcon,
} from '@/components';

export function Login() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 },
  };

  const orDivider = (
    <div className='flex items-center gap-4 py-2'>
      <Divider className='flex-1' />
      <p className='shrink-0 text-tiny text-default-500'>OR</p>
      <Divider className='flex-1' />
    </div>
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Implement login logic
  };

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <div className='flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small'>
        <ResizablePanel>
          <h1 className='mb-4 text-xl font-medium'>Log In</h1>
          <AnimatePresence initial={false} mode='popLayout'>
            <LazyMotion features={domAnimation}>
              {isFormVisible ? (
                <m.div
                  animate='visible'
                  className='flex flex-col gap-y-3'
                  exit='hidden'
                  initial='hidden'
                  variants={variants}
                  onSubmit={e => e.preventDefault()}
                >
                  <Form validationBehavior='native' onSubmit={handleSubmit}>
                    <Input
                      autoFocus
                      isRequired
                      label='Email Address'
                      name='email'
                      type='email'
                      variant='bordered'
                    />
                    <Input
                      isRequired
                      label='Password'
                      name='password'
                      type='password'
                      variant='bordered'
                    />
                    <div className='flex w-full items-center justify-between px-1 py-2'>
                      <Checkbox name='remember' size='sm'>
                        Remember me
                      </Checkbox>
                      <Link className='text-default-500' href='#' size='sm'>
                        Forgot password?
                      </Link>
                    </div>
                    <Button className='w-full' color='primary' type='submit'>
                      Log In
                    </Button>
                  </Form>
                  {orDivider}
                  <Button
                    fullWidth
                    startContent={
                      <LeftArrowIcon className='text-default-500' width={18} />
                    }
                    variant='flat'
                    onPress={() => setIsFormVisible(false)}
                  >
                    Other Login options
                  </Button>
                </m.div>
              ) : (
                <>
                  <Button
                    fullWidth
                    color='primary'
                    startContent={
                      <LetterIcon className='pointer-events-none text-2xl' />
                    }
                    type='button'
                    onPress={() => setIsFormVisible(true)}
                  >
                    Continue with Email
                  </Button>
                  {orDivider}
                  <m.div
                    animate='visible'
                    className='flex flex-col gap-y-2'
                    exit='hidden'
                    initial='hidden'
                    variants={variants}
                  >
                    <div className='flex flex-col gap-2'>
                      <Button
                        fullWidth
                        startContent={
                          <GoogleIcon className='text-default-500' width={24} />
                        }
                        variant='flat'
                      >
                        Continue with Google
                      </Button>
                      <Button
                        fullWidth
                        startContent={
                          <GitHubIcon className='text-default-500' width={24} />
                        }
                        variant='flat'
                      >
                        Continue with GitHub
                      </Button>
                    </div>
                    <p className='mt-3 text-center text-small'>
                      Need to create an account?&nbsp;
                      <Link href='#' size='sm'>
                        Sign Up
                      </Link>
                    </p>
                  </m.div>
                </>
              )}
            </LazyMotion>
          </AnimatePresence>
        </ResizablePanel>
      </div>
    </div>
  );
}
