const SkillBadge = ({ skill }) => {
  return (
    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
      {skill}
    </span>
  );
};

export default SkillBadge;

