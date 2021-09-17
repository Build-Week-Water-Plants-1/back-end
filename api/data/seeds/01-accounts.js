
exports.seed = function(knex) {
  return knex('users').insert([
    {user_id: 1, username: 'foo', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '2223334444'},
    {user_id: 2, username: 'John', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '2213314441'},
    {user_id: 3, username: 'Hey', password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', phone_number: '3224335444'}
  ]);
};
