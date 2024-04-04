import React from 'react';
import {SwipeToCardDeleteProps} from './SwipeToCardDelete.types';
import {SwipeToDelete} from "@shared/ui/SwipeToDelete";
import {useTasksList} from "@entities/task/model";

export const SwipeToCardDelete: React.FC<SwipeToCardDeleteProps> = ({children,taskId}) => {
  const tasksList = useTasksList();

  return (
      <SwipeToDelete
          styles={{container: {borderRadius: 12}}}
          onSwipeableOpen={() => tasksList.remove(taskId)}
      >
        {children}
      </SwipeToDelete>
  );
};
