
// // // https://www.sanity.io/docs/structure-builder-cheat-sheet
// // export const structure= (S) =>
// //   S.list()
// //     .title('Content')
// //     .items(S.documentTypeListItems())




// import { StructureBuilder } from 'sanity/desk';

// export const structure = (S: StructureBuilder) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems());


import { StructureBuilder } from 'sanity/desk';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems());
