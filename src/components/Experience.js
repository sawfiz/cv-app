import TextInput from './inputs/TextInput';

export default function Experience({ job, updateExperiences, deleteExperience }) {

  function updateExperience(e, attr) {
    updateExperiences(e, attr, job.id)
  }

  return (
    <div>
      <form>
        <ul>
          <TextInput fieldName={'Position'} data={job.Position} handleChange={updateExperience}/>
          <TextInput fieldName={'Company'} data={job.Company} handleChange={updateExperience} />
        </ul>
      </form>
      <button onClick={()=>deleteExperience(job.id)}>Delete</button>
    </div>
  );
}
