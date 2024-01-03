import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react'

export default function Form ({ csrf }){
  const { data, setData, post, processing, errors } = useForm({
    _token: csrf,
    name: '',
    due_in: '',
    priority: '',
  });

  function submit(e){
    e.preventDefault()
    post(route('tasks.store'))
  }
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:w-1/2">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">
          New Task
        </h3>

      </div>
      <form onSubmit={submit}>
        <div className="p-6.5">
          <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
            <div className="w-full">
              <InputLabel
                htmlFor="name"
              >
                Name <span className="text-meta-1">*</span>
              </InputLabel>
              <TextInput
                id="name"
                type="text"
                name='name'
                placeholder="Enter the task name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                onChange={e => setData('name', e.target.value)}
                isFocused={true}
                value={data.name}
              />
              <InputError message={errors.name} />
            </div>

          </div>

          <div className="mb-4.5">
            <InputLabel htmlFor="due_in">
              Due in <span className="text-meta-1">*</span>
            </InputLabel>
            <TextInput
              id="due_in"
              name="due_in"
              type="datetime-local"
              placeholder="Select due time"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              value={data.due_in}
              onChange={e => setData('due_in', e.target.value)}
            />
            <InputError message={errors.due_in} />
          </div>


          <div className="mb-4.5">
            <InputLabel htmlFor="priority">
              Priority <span className="text-meta-1">*</span>
            </InputLabel>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                name='priority'
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                value={data.priority}
                onChange={e => setData('priority', e.target.value)}
              >
                <option value="">Choose priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
            <InputError message={errors.priority} />
          </div>

          <div className="flex w-full gap-4">
            <Link
              href='/dashboard'
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-black px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              <span>
                <svg className="fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z" fill=""></path></svg>
              </span>
              Cancel
            </Link>
            <PrimaryButton disabled={processing}>
              Save
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  )
}
