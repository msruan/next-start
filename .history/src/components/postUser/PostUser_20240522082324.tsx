const getUser = async()=>{

}

async function PostUser({id} :id: string) {
  const user = await getUser(id);
  return (
    <>
      <p>Name of Author</p>
    </>
  );
}

export default PostUser;
