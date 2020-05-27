class Mytask extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <div className="task">
        <Menu />
        <div class="row row-task">
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Planned </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4 column-task">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  In Progress Task
                </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Complete Task</h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mytask;
