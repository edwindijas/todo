import TextInput from '@/components/atoms/TextInput'

const CreateTask =  (): JSX.Element => <div className='w-full max-w-lg mx-auto'>
    <h1>Create Task</h1>
    <div className='flex flex-col gap-3 py-4' >
      <TextInput label='Task Name' intent='secondary' />
      <TextInput label='Description' intent='secondary' />
      <TextInput label='Type' />
      <TextInput label='Priority' />
      <TextInput label='Assignee' />
      <TextInput label='Due Date' />
      <TextInput label='Attachements' />
      <TextInput label='labels' />
    </div>
  </div>

export default CreateTask