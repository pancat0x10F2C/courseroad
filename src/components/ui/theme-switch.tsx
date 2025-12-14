'use client';

import React from 'react';

import type { RadioGroupProps, RadioProps } from '@heroui/react';
import {
  RadioGroup,
  useRadio,
  useRadioGroupContext,
  VisuallyHidden,
} from '@heroui/react';
import { useIsSSR } from '@react-aria/ssr';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import { MoonIcon, SunIcon, SystemIcon } from '@/components';

const ThemeRadioItem = ({
  icon: IconComponent,
  ...props
}: RadioProps & {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  const {
    Component,
    isSelected: isSelfSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useRadio(props);

  const groupContext = useRadioGroupContext();

  const isSelected =
    isSelfSelected || groupContext.groupState.selectedValue === props.value;
  const wrapperProps = getWrapperProps();

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...wrapperProps}
        className={clsx(
          wrapperProps?.className,
          'pointer-events-none h-8 w-8 rounded-full border border-default-200 ring-0 transition-all duration-200 group-data-[pressed=true]:scale-90 flex items-center justify-center',
          {
            'bg-default-200 dark:bg-default-100 border-default-300': isSelected,
            'hover:bg-default-100 dark:hover:bg-default-50': !isSelected,
          },
        )}
      >
        <IconComponent
          className={clsx(
            'transition-colors duration-200',
            isSelected ? 'text-default-700' : 'text-default-500',
          )}
          height={18}
          width={18}
        />
      </div>
    </Component>
  );
};

export interface ThemeSwitchProps {
  className?: string;
  classNames?: Omit<RadioGroupProps, 'children'>['classNames'];
}

export function ThemeSwitch({ className, classNames }: ThemeSwitchProps) {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const handleSelectionChange = (value: string) => {
    setTheme(value);
  };

  // Determine the current value, defaulting to 'system' during SSR
  const currentValue = isSSR ? 'system' : theme || 'system';

  return (
    <RadioGroup
      aria-label='Select theme'
      className={clsx('flex items-center', className)}
      classNames={{
        ...classNames,
        wrapper: clsx('gap-1 items-center flex-row', classNames?.wrapper),
      }}
      orientation='horizontal'
      value={currentValue}
      onValueChange={handleSelectionChange}
    >
      <ThemeRadioItem icon={MoonIcon} value='dark' />
      <ThemeRadioItem icon={SunIcon} value='light' />
      <ThemeRadioItem icon={SystemIcon} value='system' />
    </RadioGroup>
  );
}
