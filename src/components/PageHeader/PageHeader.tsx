import { SearchIcon, TimeIcon } from 'assets/ts';
import { BaseInput } from 'components/Base';
import { en } from 'dictionary/en';
import { useFormContext } from 'react-hook-form';
import { IFormValues } from 'types';

export function PageHeader() {
  const { register } = useFormContext<IFormValues>();

  return (
    <>
      <div className="flex items-center justify-between  mb-3">
        <h1 className="text-3xl font-bold">{en.title}</h1>
        <TimeIcon fill="fill-black" />
      </div>
      <BaseInput
        Icon={<SearchIcon fill="fill-gray-400" />}
        placeholder={en.search}
        register={register('search')}
      />
    </>
  );
}
