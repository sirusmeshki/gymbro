import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";

import Workout from "@/components/Cards/Workouts/Workout";
import { WorkoutProps } from "@/components/Cards/Moves/Move/Options/models";
// import EditingWorkout from "./EditingWorkout";

const Workouts = ({ isEditing }: { isEditing: boolean }) => {
  const workouts = useReadLocalStorage<WorkoutProps[]>("workouts");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <ul className="flex flex-col w-full h-full border-left lg:border-none overflow-y-scroll bg-white">
      {isClient &&
        workouts?.map(
          (workout: WorkoutProps, index) =>
            !isEditing && (
              <Workout
                key={index}
                name={workout.name}
                image_url={workout.image_url}
                effective_muscle={workout.effective_muscle}
                rest={workout.rest}
                SARs={workout.SARs}
                superset={workout.superset}
              />
            )
          // : (
          //   <EditingWorkout
          //     key={index}
          //     name={workout.name}
          //     effective_muscle={workout.effective_muscle}
          //     rest={workout.rest}
          //     SARs={workout.SARs}
          //     superset={workout.superset}
          //   />
          // )
        )}
    </ul>
  );
};

export default Workouts;
