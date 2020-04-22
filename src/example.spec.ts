class FriendList {
  friends: string[] = [];

  addFriend(name: string): void {
    this.friends.push(name);
    this.announceFriendShip(name);
  }

  announceFriendShip(name: string): void {
    global.console.log(`${name} is your friend now :D`);
  }

  removeFriend(name: string): void {
    const idx = this.friends.indexOf(name);
    if (idx !== -1) {
      this.friends = this.friends.splice(idx, 0);
    } else throw new Error('Friend not found');
  }
}

describe('example', () => {
  let friendList: FriendList;

  beforeEach(() => {
    friendList = new FriendList();
  });

  it('shoud be able to initialize a friends array', () => {
    expect(friendList.friends.length).toEqual(0);
  });

  it('should be able to add a friend on friends array', () => {
    friendList.addFriend('Emmanuel');

    expect(friendList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendList.announceFriendShip = jest.fn();

    expect(friendList.announceFriendShip).not.toHaveBeenCalled();

    friendList.addFriend('Emmanuel');

    expect(friendList.announceFriendShip).toHaveBeenCalledWith('Emmanuel');
  });

  describe('removeFriend', () => {
    it('it should be to remove a friend from list', () => {
      friendList.addFriend('Emmanuel');
      expect(friendList.friends[0]).toEqual('Emmanuel');

      friendList.removeFriend('Emmanuel');
      expect(friendList.friends[0]).toBeUndefined();
    });

    it('throw an error as friend does not exist', () => {
      expect(() => friendList.removeFriend('Emmanuel')).toThrow(
        new Error('Friend not found'),
      );
    });
  });
});
