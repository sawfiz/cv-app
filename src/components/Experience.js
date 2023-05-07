import useState from 'react';
import TextInput from './inputs/TextInput';

export default function Experience({ key, job }) {

  return (
    <div>
      <form>
        <ul>
          <TextInput fieldName={'Position'} data={job.Position} />
          <TextInput fieldName={'Company'} data={job.Company} />
        </ul>
      </form>
      <button>Delete</button>
    </div>
  );
}
