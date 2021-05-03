import GroupModel from "./models/GroupModel";

export const MOCK_INBOX: GroupModel = {
    name: 'inbox',
    sections: [
        {
            id: 1,
            name: 'inbox',
            tasks:[
                {
                    id: 1,
                    what: 'clean'
                },
                {
                    id: 2,
                    what: 'read'
                },
                {
                    id: 3,
                    what: 'run'
                }
            ]
        }
    ]
}

export const MOCK_PROJECT: GroupModel = {
  name: 'fmi',
  sections: [
      {
          id: 1,
          name: 'lp',
          tasks: [
              {
                  id: 1,
                  what: 'study prolog'
              },
              {
                  id: 2,
                  what: 'study resolution'
              }
          ]
      },
      {
          id: 2,
          name: 'daa',
          tasks: [
              {
                  id: 4,
                  what: 'study graph algorithms'
              },
              {
                  id: 5,
                  what: 'drink  yourself unconsious if you\'ve got a passing grade'
              }
          ]
      },
      {
          id: 3,
          name: 'ner',
          tasks: [
              {
                  id: 6,
                  what: 'make this as professional as possible'
              }
          ]
      }
  ]
};
