const notes = [
    {
        id: 1,
        title: 'TEST 1: The Online store', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Jan 7, 2023'
    },
    {
        id: 2,
        title: 'TEST 2: Aim for the fortune', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Mar 7, 2023'
    },
    {
        id: 3,
        title: 'TEST 3: Win it or leave it', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Apr 4, 2023'
    },
    {
        id: 4,
        title: 'TEST 4: What is integrity for ?', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Jun 7, 2023'
    },
    {
        id: 5,
        title: 'TEST 5: Acceture People are best people', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'July 17, 2023'
    },
    {
        id: 6,
        title: 'TEST 6: The ATCP Song Capability', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Aug 18, 2023'
    },
    {
        id: 7,
        title: 'TEST 7: Track your Progress', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Apr 4, 2023'
    },
    {
        id: 8,
        title: 'TEST 8: A Secret to a well spent Quality Time', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Jun 7, 2023'
    },
    {
        id: 9,
        title: 'TEST 9: Is my IQ enough?', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'July 17, 2023'
    },
    {
        id: 10,
        title: 'TEST 10: Mark all as read', 
        details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam totam quia laboriosam, fuga veritatis atque. Consequuntur praesentium harum dicta incidunt? Asperiores, aperiam praesentium dolore fuga aut repellendus totam tempora? Esse laborum sequi mollitia itaque quasi, molestias, facere consequuntur exercitationem tempore ut veritatis ullam laudantium rerum dolores quo totam corrupti minus omnis. Beatae ex provident reiciendis enim aperiam odit quo modi amet fugit aspernatur sed culpa dolorum dignissimos quod nobis error ducimus, necessitatibus a ipsam veritatis recusandae.', 
        date: 'Aug 18, 2023'
    },

] 

export default notes;