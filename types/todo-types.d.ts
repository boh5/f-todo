declare namespace TodoTypes {
  type TTodo = {
    id: number;
    title: string;
    comment: string;
    url: string;
    completed: boolean;
    created_at: Date;
    updated_at: Date;
    deadline?: Date;
  };
}
