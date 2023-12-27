using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DataContext _context;
            public Handler(DataContext contact)
            {
                _context = contact;
            }

            public async Task<Activity> Handle(Query requset, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(requset.Id);
            }
        }
    }
}
