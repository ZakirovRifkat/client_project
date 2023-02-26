export interface IMetric {
  userId: number;
  id: number;
  tasks: {
    done: number;
    all: number;
  };
  notification: {
    readed: number;
    all: number;
  };
  efficient: number;
  date: Date;
}
