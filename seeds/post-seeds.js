const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Pellentesque habitant morbi tristique senectus et. Et magnis dis parturient montes nascetur ridiculus mus.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Ornare massa eget egestas purus viverra. Vel quam elementum pulvinar etiam.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat. Aliquet porttitor lacus luctus accumsan tortor posuere.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Porta nibh venenatis cras sed felis.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Ultrices sagittis orci a scelerisque purus semper eget. Non consectetur a erat nam.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Egestas tellus rutrum tellus pellentesque eu tincidunt. Est placerat in egestas erat imperdiet sed euismod nisi porta.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Faucibus ornare suspendisse sed nisi lacus sed. At augue eget arcu dictum.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Tortor condimentum lacinia quis vel eros donec ac. Pulvinar pellentesque habitant morbi tristique senectus et.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Lobortis mattis aliquam faucibus purus in massa tempor nec. Convallis aenean et tortor at risus viverra adipiscing.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Fames ac turpis egestas maecenas.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Neque viverra justo nec ultrices dui sapien eget. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Augue lacus viverra vitae congue eu consequat ac felis donec. Cras sed felis eget velit aliquet sagittis id consectetur purus.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Ornare arcu odio ut sem nulla pharetra diam sit. Morbi tincidunt ornare massa eget egestas purus.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Condimentum mattis pellentesque id nibh tortor id. Ut porttitor leo a diam sollicitudin tempor id eu nisl.',
    user_id: 3
  },
  {
    title:  'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Id diam vel quam elementum pulvinar etiam non. Tortor id aliquet lectus proin.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Morbi tristique senectus et netus. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Lacus luctus accumsan tortor posuere ac. Eu ultrices vitae auctor eu augue ut lectus.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Dictum fusce ut placerat orci. Tincidunt eget nullam non nisi est sit amet.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Tellus integer feugiat scelerisque varius morbi. Dictum varius duis at consectetur lorem donec massa.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;