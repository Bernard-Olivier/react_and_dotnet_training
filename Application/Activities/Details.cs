using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<Activity>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext contact)
            {
                _context = contact;
            }

            public async Task<Result<Activity>> Handle(Query requset, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(requset.Id);
                return Result<Activity>.Success(activity);
            }
        }
    }
}
