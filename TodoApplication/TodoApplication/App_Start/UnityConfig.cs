using Microsoft.Practices.Unity;
using System.Web.Http;
using TodoApplication.Controllers;
using TodoApplication.Interfaces.Repositories;
using TodoApplication.Repositories;
using Unity.WebApi;

namespace TodoApplication
{
  public static class UnityConfig
  {
    public static void RegisterComponents()
    {
      var container = new UnityContainer();
      container.RegisterType<IToDoRepositoryAsync, ToDoRepositoryAsync>(new ContainerControlledLifetimeManager());
      container.RegisterType<ToDoController, ToDoController>();
      GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
    }
  }
}